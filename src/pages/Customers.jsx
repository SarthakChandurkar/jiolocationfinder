import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import avatar from "../data/avatar4.jpg"
// import Notification from '../components/Notification';
import { BsBookmarkPlus } from 'react-icons/bs';
import {BiShare} from "react-icons/bi"
import Comments from "./Comments"

const Customers = () => {
  // const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete'];
  // const editing = { allowDeleting: true, allowEditing: true };
  const tweets = [{ name: "Rohit Kumavat", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ultricies nisi scelerisque ultrices. Etiam consequat egestas lacus, eu aliquet mi laoreet ac. Nulla eget nisi venenatis, ullamcorper ante at, molestie dolor. Cras hendrerit ligula vitae dapibus semper. Phasellus nulla lorem, maximus quis venenatis eu, molestie in sem. Donec eu urna et neque ultricies blandit vitae vel elit. Vestibulum finibus, nulla vitae malesuada pharetra, eros diam hendrerit eros, et imperdiet dui enim vitae dui. Pellentesque accumsan pulvinar interdum. Proin a vulputate metus, at malesuada eros. Morbi scelerisque, augue id porta scelerisque, arcu felis pretium nisi, dignissim pharetra ex nisi in tellus. Suspendisse eu ante sed ante iaculis ullamcorper id at mauris. Donec id nunc id nisl cursus scelerisque. Nulla facilisi. Vestibulum interdum turpis urna, pharetra vestibulum urna tempus sit amet. Praesent sagittis pellentesque mauris, efficitur feugiat nibh ultricies id. Pellentesque maximus turpis non dui sodales efficitur. Pellentesque bibendum mi at.", img: "../../data/avatar4.jpg" }, { name: "Gautam zavlani", desc: "Web Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ultricies nisi scelerisque ultrices. Etiam consequat egestas lacus, eu aliquet mi laoreet ac. Nulla eget nisi venenatis, ullamcorper ante at, molestie dolor. Cras hendrerit ligula vitae dapibus semper. Phasellus nulla lorem, maximus quis venenatis eu, molestie in sem. Donec eu urna et neque ultricies blandit vitae vel elit. Vestibulum finibus, nulla vitae malesuada pharetra, eros diam hendrerit eros, et imperdiet dui enim vitae dui. Pellentesque accumsan pulvinar interdum. Proin a vulputate metus, at malesuada eros. Morbi scelerisque, augue id porta scelerisque, arcu felis pretium nisi, dignissim pharetra ex nisi in tellus. Suspendisse eu ante sed ante iaculis ullamcorper id at mauris. Donec id nunc id nisl cursus scelerisque. Nulla facilisi. Vestibulum interdum turpis urna, pharetra vestibulum urna tempus sit amet. Praesent sagittis pellentesque mauris, efficitur feugiat nibh ultricies id. Pellentesque maximus turpis non dui sodales efficitur. Pellentesque bibendum mi at. and AI ML", img: "../../data/avatar4.jpg" }, { name: "Swarnim zol", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ultricies nisi scelerisque ultrices. Etiam consequat egestas lacus, eu aliquet mi laoreet ac. Nulla eget nisi venenatis, ullamcorper ante at, molestie dolor. Cras hendrerit ligula vitae dapibus semper. Phasellus nulla lorem, maximus quis venenatis eu, molestie in sem. Donec eu urna et neque ultricies blandit vitae vel elit. Vestibulum finibus, nulla vitae malesuada pharetra, eros diam hendrerit eros, et imperdiet dui enim vitae dui. Pellentesque accumsan pulvinar interdum. Proin a vulputate metus, at malesuada eros. Morbi scelerisque, augue id porta scelerisque, arcu felis pretium nisi, dignissim pharetra ex nisi in tellus. Suspendisse eu ante sed ante iaculis ullamcorper id at mauris. Donec id nunc id nisl cursus scelerisque. Nulla facilisi. Vestibulum interdum turpis urna, pharetra vestibulum urna tempus sit amet. Praesent sagittis pellentesque mauris, efficitur feugiat nibh ultricies id. Pellentesque maximus turpis non dui sodales efficitur. Pellentesque bibendum mi at.", img: "../../data/avatar4.jpg" }, { name: "Person 4", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo ultricies nisi scelerisque ultrices. Etiam consequat egestas lacus, eu aliquet mi laoreet ac. Nulla eget nisi venenatis, ullamcorper ante at, molestie dolor. Cras hendrerit ligula vitae dapibus semper. Phasellus nulla lorem, maximus quis venenatis eu, molestie in sem. Donec eu urna et neque ultricies blandit vitae vel elit. Vestibulum finibus, nulla vitae malesuada pharetra, eros diam hendrerit eros, et imperdiet dui enim vitae dui. Pellentesque accumsan pulvinar interdum. Proin a vulputate metus, at malesuada eros. Morbi scelerisque, augue id porta scelerisque, arcu felis pretium nisi, dignissim pharetra ex nisi in tellus. Suspendisse eu ante sed ante iaculis ullamcorper id at mauris. Donec id nunc id nisl cursus scelerisque. Nulla facilisi. Vestibulum interdum turpis urna, pharetra vestibulum urna tempus sit amet. Praesent sagittis pellentesque mauris, efficitur feugiat nibh ultricies id. Pellentesque maximus turpis non dui sodales efficitur. Pellentesque bibendum mi at.", img: "../../data/avatar4.jpg" }]
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Connect++" />
      <div>
        {/* <h1>Tweets</h1> */}
        {tweets?.map((item, index) => (
          <div className='flex-col gap-3'>
            <div key={index} className="flex items-center leading-8 gap-5  p-3">
              <img className="rounded-full h-10 w-10" src={avatar} alt={item.name} />
              <div>
                <p className="font-semibold dark:text-gray-200">{item.name}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
            <div className='pl-14'>
              <div className='flex items-center leading-8 gap-5 p-4'>
                  <BsBookmarkPlus/> <BiShare/> 
              </div>
              <p className='p-3'>Comments</p>
              <Comments  className="border-b-1 border-color"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;

