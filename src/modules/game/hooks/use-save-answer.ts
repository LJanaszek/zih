import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "..";

export function useSaveAnswer() {
  const dispatch = useGameModuleDispatch();

  return useCallback(
    (id: string, value: string) => {
      dispatch({
        type: GAME_MODULE_ACTION.SAVE_ANSWER,
        payload: {
          id: id,
          value: value,
        },
      });
    },
    [dispatch]
  );
}
