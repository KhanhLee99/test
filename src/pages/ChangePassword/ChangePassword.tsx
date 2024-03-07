import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { omit } from 'lodash'

import Button from 'src/components/Button'
import InputPassword from 'src/components/InputPassword'
import { UserSchema, userSchema } from 'src/utils/rules'
import userApi from 'src/apis/user.api'
import { isErrorUnprocessableEntity } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'

type FormData = Pick<UserSchema, 'password' | 'new_password' | 'confirm_password'>
const passwordSchema = userSchema.pick(['password', 'new_password', 'confirm_password'])

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      new_password: '',
      confirm_password: ''
    },
    resolver: yupResolver(passwordSchema),
    shouldFocusError: false
  })

  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile,
    onSuccess: (data) => {
      toast.success(data.data.message, { position: 'top-center', autoClose: 1000 })
      reset()
    }
  })

  const onSubmit = handleSubmit((data) => {
    updateProfileMutation.mutate(omit(data, ['confirm_password']), {
      onError: (error) => {
        if (isErrorUnprocessableEntity<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>Đổi mật khẩu</h1>
        <div className='mt-1 text-sm text-gray-700'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <form className='mt-8 mr-auto max-w-3xl' onSubmit={onSubmit}>
        <div className='mt-6 flex-grow md:mt-0 md:pr-12'>
          <div className='relative mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[30%] sm:text-right'>Mật khẩu hiện tại</div>
            <div className='sm:w-[70%] sm:pl-5'>
              <InputPassword
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                name='password'
                placeholder='Mật khẩu hiện tại'
                errorMessage={errors.password?.message}
                register={register}
              />
            </div>
          </div>
          <div className='relative mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[30%] sm:text-right'>Mật khẩu mới</div>
            <div className='sm:w-[70%] sm:pl-5'>
              <InputPassword
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                name='new_password'
                placeholder='Mật khẩu mới'
                errorMessage={errors.new_password?.message}
                register={register}
              />
            </div>
          </div>
          <div className='relative mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[30%] sm:text-right'>Nhập lại mật khẩu mới</div>
            <div className='sm:w-[70%] sm:pl-5'>
              <InputPassword
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                name='confirm_password'
                placeholder='Nhập lại mật khẩu mới'
                errorMessage={errors.confirm_password?.message}
                register={register}
              />
            </div>
          </div>
          <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[30%] sm:text-right' />
            <div className='sm:w-[70%] sm:pl-5'>
              <Button
                className='flex h-9 items-center rounded-sm bg-orange px-5 text-center text-sm text-white hover:bg-orange/80'
                type='submit'
                isLoading={updateProfileMutation.isPending}
                disabled={updateProfileMutation.isPending}
              >
                Lưu
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}