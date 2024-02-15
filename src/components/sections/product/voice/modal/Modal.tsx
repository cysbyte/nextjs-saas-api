import RecordModal from "@/components/shared/RecordModal";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <>
      <Link href="/?medal=true">
        SUMMON THE MODAL
      </Link>

      {show && <RecordModal />}
    </>
  );
}