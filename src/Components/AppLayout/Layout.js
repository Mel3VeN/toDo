import ContentWindow from '../ContentWindow/ContentWindow';
import SideNav from './SideNav';

import MobileSideBar from './MobileSideBar';

import TopNav from './TopNav';

export default function Example() {
  return (
    <div className="height rounded-2xl h-screen md:h-full shadow-lg flex overflow-hidden bg-gray-100">
      <MobileSideBar />
      <SideNav />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <TopNav />
        <ContentWindow />
      </div>
    </div>
  );
}
