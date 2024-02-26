import DeleteModal from "@/components/shared/DeleteModal"
import RecordModal from "@/components/shared/RecordModal"
import Link from "next/link"
import { Suspense } from "react"

export default function DeleteVoicePage() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DeleteModal/>                     
        </Suspense>
    )
}