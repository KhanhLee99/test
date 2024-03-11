import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { HashRouter } from 'react-router-dom'
import i18n from './i18n/i18n'

import App from './App'

// expect.extend(matchers)

describe('Test App Render', () => {
  test('Test render and navigate page', async () => {
    render(<App />, {
      wrapper: HashRouter
    })
    const user = userEvent.setup()
    /**
     * waitFor sẽ run callback 1 vài lần
     * cho đến khi hết timeout hoặc expect pass
     * số lần run phụ thuộc vào timeout và interval
     * mặc định: timeout = 1000ms và interval = 50ms
     */
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe(`${i18n.t('home')} | Shopee Clone`)
    })
    await user.click(screen.getByText(new RegExp(i18n.t('login') as string, 'i')))
    await waitFor(() => {
      expect(screen.getByText(new RegExp(i18n.t('dont have account') as string, 'i')))
      expect(document.querySelector('title')?.textContent).toBe(`${i18n.t('login')} | Shopee Clone`)
    })
    screen.debug(document.body.parentElement as HTMLElement, 99999999)
  })
})
