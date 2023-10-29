// import React from 'react'

// const test = () => {
  
//   //use case of useQuery
//   const { data: addressData, isLoading } = useQuery({
//     queryFn: () => builder.use().address.api.addressList(),
//     queryKey: builder.address.api.addressList.get(),
//     select: ({ data }) => data?.results,
//   });

//   // use case of useMutation
//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => builder.use().auth.api.login(myForm.values),
//     mutationKey: builder.auth.api.login.get(),
//     onSuccess(data, variables, context) {
//       push("/home");
//       toast.success("login successful");
//       cookieStorage.setItem("my-user", JSON.stringify(data.data));
//       myForm.reset();
//     },
//     onError(err) {
//       console.log(err);
//       toast.error("invalid input");
//     },
//   });

//   return (
//     <div>test</div>
//   )
// }

// export default test