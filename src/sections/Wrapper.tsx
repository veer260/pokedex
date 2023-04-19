import React from "react";

// const Wrapper = (IncomingComponent) => {
//   return const OutputComponent = (props) => {
//     return ( <IncomingComponent {...props} flex-grow mx-16  text-white border-[1px] border-white border-opacity-20  /> )
//   }
//   // return (
//   //   <div className="flex-grow mx-16  text-white border-[1px] border-white border-opacity-20">
//   //     Wrapper
//   //   </div>
//   // );
// };

const Wrapper = (IncomingComponent: React.FC) => {
  const OutputComponent = (props: any) => {
    const classes =
      "flex-grow mx-16  text-white border-[1px] border-white border-opacity-20";
    return <IncomingComponent {...props} styling={classes} />;
  };

  return OutputComponent;
};

export default Wrapper;
