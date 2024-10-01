import DebugRoute from "@/components/common/debugroute";

interface EditItemProp { // making a interface to give params a type of string
    params: {
      id: string;
    };
  }

export default function EditItem({ params } : EditItemProp ) {  // pass in the prop to here
    const { id } = params
  return (
    <div>
      <h1>Edit Page</h1> {/* This will not work until we get like most of the application built */}
      <p>ID {id} </p>
      <DebugRoute />
    </div>
  );
}
