export const queryConfig = {
    refetchOnWindowFocus: false,
  };
  export const toJson = (res: any) => {
    if (typeof res === "object") {
      return JSON.parse(JSON.stringify(res));
    }
    return JSON.parse(JSON.stringify({}));
  };
  