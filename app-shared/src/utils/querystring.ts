export interface QueryObject {
  [key: string]: string | number | any;
}

export function stringify(
  data: QueryObject,
  prefix: string = '',
  depth: number = 0
): string {
  return Object.entries(data).reduce((querystring, [datumKey, datumValue]) => {
    const key = depth === 0 ? datumKey : `${prefix}[${datumKey}]`;
    const value =
      (typeof datumValue === 'string' && encodeURIComponent(datumValue)) ||
      (typeof datumValue === 'object' &&
        stringify(<QueryObject>datumValue, prefix, depth++)) ||
      datumValue;

    return `${querystring}&${key}=${value}`;
  }, '');
}
