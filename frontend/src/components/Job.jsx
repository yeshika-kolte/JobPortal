import { Bookmark } from "lucide-react"
import Button from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"

const Job = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
      <p className="mb-3 text-sm text-gray-500">2 days ago</p>
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" className="rounded-full" size="icon" aria-label="Save job">
          <Bookmark className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="rounded-full p-0" aria-label="Company profile">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" />
          </Avatar>
        </Button>
        <div className="flex-1">
          <h1 className="text-base font-semibold text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
          <div className="mt-2">
            <h1 className="text-lg font-medium text-gray-900">Title</h1>
            <p className="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam laboriosam exercitationem sunt cumque soluta nihil libero blanditiis vitae tempora voluptatum..</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24 lpa</Badge>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="bg-[#7209b7] text-white hover:bg-[#5a0a8f] px-3 py-1 text-sm">Details</Button>
            <Button variant="outline" className="border-[#7209b7] text-[#7209b7] hover:bg-[#7209b7] hover:text-white px-3 py-1 text-sm">Save for later</Button>
          </div>
        </div>
      </div>




    </div>

  )
}

export default Job