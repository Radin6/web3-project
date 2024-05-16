// import React, { useState, Children, cloneElement } from 'react';

// function Test() {
//    return(
//     <div>
//       <Tabs >
//         <TabList>
//           <Tab >Primero</Tab>
//           <Tab >Segundo</Tab>
//           <Tab >Tercero</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel >Primer contenido</TabPanel>
//           <TabPanel >Segundo contenido</TabPanel>
//           <TabPanel >Tercer contenido</TabPanel>
//         </TabPanels>
//       </Tabs>
//     </div>
//    )
// }

// function Tabs({children}) {
//   const [activeIndex, setActiveIndex] = useState<number>(0)

//   const childrenWithProps = Children.map(children, (child, index) => {
//     return cloneElement(child, {
//       setActiveIndex: (i: number) => {
//         setActiveIndex(i);
//       },
//       activeIndex,
//     });
//   });

//   return <div>{childrenWithProps}</div>;
// }

// function TabList({activeIndex, setActiveIndex, children, ...props }) {

//   const childrenWithProps = Children.map(children, (child, index) => {
//     return cloneElement(child, {
//       setActiveIndex: (i: number) => {
//         setActiveIndex(i);
//       },
//       index,
//       isActive: index === activeIndex,
//     });
//   });

//   return <div className="flex gap-4 text-sm px-4 lg:px-2 w-fit mb-5">{childrenWithProps}</div>;
// }

// function Tab({index, setActiveIndex, isActive, children }) {

//   return (
//     <button
//       className={`relative overflow-hidden pb-2 group capitalize ${isActive ? "font-semibold" : ""}`}
//       onClick={()=>setActiveIndex(index)}
//     >
//       {children}
//       <span
//         className={`absolute bottom-0 left-0 w-full h-0.5 ${isActive ? "scale-x-100" : "scale-x-0"} bg-accent-light transform transition-transform ease-out duration-300`}
//       />
//     </button>
//   )
// }

// function TabPanels({activeIndex, setActiveIndex, children, ...props }) {

//   const childrenWithProps = Children.map(children, (child, index) => {
//     return cloneElement(child, {
//       setActiveIndex: (i: number) => {
//         setActiveIndex(i);
//       },
//       index,
//       isActive: index === activeIndex,
//     });
//   });

//   return (
//     <div className="flex gap-2 text-sm min-w-full">
//       {childrenWithProps}
//     </div>
//   )
// }

// function TabPanel({ isActive, children }) {

//   return (
//     <>
//     {isActive &&
//       <div className="w-full">
//         {children}
//       </div>
//     }
//     </>
//   )
// }

// export { Tabs, TabList, Tab, TabPanels, TabPanel, Test };
