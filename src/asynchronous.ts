{
  //  basic promise

  //simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Data is something";
      //   const data: unknown = null;
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling createPromise function
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    return data;
  };

  console.log(showData());
}
