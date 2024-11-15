import { createContext, FC, PropsWithChildren, useState } from 'react';

export type IAppData = Record<string, unknown>;

interface IDataSetter<T = unknown> {
  (key: string, val: T): void | Promise<void>;
}

export interface IAppDataContextValue<TData extends IAppData = IAppData> {
  data: TData;
  setDataByKey: IDataSetter;
  getDataByKey: <T = unknown>(key: string) => T | null;
}

const defaultSetter = (_key: string, _val: unknown) => {};

function defaultGetter<T = unknown>(_key: string): T | null {
  return null;
}

export const AppDataContext = createContext<IAppDataContextValue>({
  data: {},
  setDataByKey: defaultSetter,
  getDataByKey: defaultGetter,
});

export interface IAppDataContextProviderProps extends PropsWithChildren {
  initData?: IAppData;
}

export const AppDataContextProvider: FC<IAppDataContextProviderProps> = (props: IAppDataContextProviderProps) => {
  const { initData = {}, children } = props;

  const [data, setData] = useState<IAppData>(initData);

  const setDataByKey = (key: string, val: unknown) => setData({ ...data, [key]: val });

  function getDataByKey<T = unknown>(key: string): T | null {
    return (data[key] as T) || null;
  }

  const ctx: IAppDataContextValue = { data, setDataByKey, getDataByKey };

  return (
    <AppDataContext.Provider value={ctx}>
      <div>{children}</div>

      <div>
        data: {JSON.stringify(data)}
      </div>
    </AppDataContext.Provider>
  );
}
