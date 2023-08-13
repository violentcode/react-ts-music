import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'

// 这对AxiosRequestConfig配置进行扩展,
export interface IInterceptors<T = AxiosResponse> {
  requestSuccess?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailure?: (err: any) => any
  responseSuccess?: (config: T) => T
  responseFailure?: (err: any) => any
}

export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IInterceptors<T>
}
