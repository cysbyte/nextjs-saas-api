import RecordModal from "@/components/shared/RecordModal"
import Link from "next/link"

export default function Products() {

    async function onClose() {
        "use server"
        console.log("Modal has closed")
    }

    async function onOk() {
        "use server"
        console.log("Ok was clicked")
    }

    return (
        <>
            <RecordModal title="" onClose={onClose} onOk={onOk}/>                     
        </>
    )
}