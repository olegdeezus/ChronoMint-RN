/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 *
 * @flow
 */

import { type Dispatch } from 'redux'
import { setGenericPassword } from 'react-native-keychain'
import { addError } from '@chronobank/login/redux/network/actions'
import { type TStoredAccount } from './reducer'

export const DUCK_SENSITIVE = 'sensitive'

export const types = {
  SET_USE_PIN_PROTECTION: 'sensitive/SET_USE_PIN_PROTECTION',
  SET_PIN: 'sensitive/SET_PIN',
  SET_LAST_ACCOUNT: 'sensitive/SET_LAST_ACCOUNT',
  ADD_ACCOUNT: 'sensitive/ADD_ACCOUNT',
}

export const setUsePinProtection = (payload: boolean) => ({
  type: types.SET_USE_PIN_PROTECTION,
  payload,
})

export const addAccount = ({ address, privateKey }: { address: string, privateKey: string }, password: string, pin?: string) =>
  async (dispatch: Dispatch<{type: string, payload: TStoredAccount }>) => {
    try {
      await setGenericPassword(address, privateKey)

      dispatch({
        type: types.ADD_ACCOUNT,
      })
    } catch (error) {
      dispatch(addError(error))
    }
  }

export const setLastAccount = (address: string) => ({
  type: types.SET_LAST_ACCOUNT,
  payload: address,
})
