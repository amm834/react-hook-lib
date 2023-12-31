import {Dispatch, SetStateAction, useCallback, useMemo, useState} from "react";
import {useStateFull} from "../state/useStateFull";

type UseBooleanFunction = (initial: boolean) => [boolean, UseBooleanActions]

export type UseBooleanActions = {
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: VoidFunction;
  setTrue: VoidFunction;
  setFalse: VoidFunction;
}

export const useBoolean: UseBooleanFunction = (initial) => {
  const [boolean, setValue] = useStateFull(initial)
  const toggle = useCallback(() => setValue(bool => !bool), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const actions = useMemo(() => ({
    setValue,
    toggle,
    setTrue,
    setFalse,
  }), [toggle, setTrue, setFalse])
  return [
    boolean,
    actions,
  ]
}
