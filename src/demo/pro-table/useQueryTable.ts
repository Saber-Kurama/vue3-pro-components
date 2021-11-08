/*
 * @Author: saber
 * @Date: 2021-11-05 16:17:08
 * @LastEditTime: 2021-11-08 14:45:25
 * @LastEditors: saber
 * @Description: 
 */

import { reactive, ref, unref } from "vue"
import cloneDeep from 'lodash-es/cloneDeep';

export const useQueryTable = (queryData: any) => {
  const formRef = ref()
  const initialModel = cloneDeep(unref(queryData));
  let paramsProxy = reactive({
    params: initialModel
  })
  const onSubmit = () => {
    // params = reactive({...queryData})
    paramsProxy.params = { ...queryData}
    console.log(paramsProxy.params, 'paramsProxy.params')
  }
  const onReset = () => {
    console.log('??>>>>')
    // Object.assign(unref(queryData), {
    //   ...cloneDeep(initialModel)
    // });
    console.log('formRef.valueformRef.value', formRef)
    //@ts-ignore
    formRef.value?.resetFields();
    console.log('queryDataqueryDataqueryDataqueryData', queryData)
    paramsProxy.params = { ...queryData}
  }
  return {
    onSubmit,
    onReset,
    formRef,
    params: paramsProxy
  }
}