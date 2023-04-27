import { IPaginatedTableProps } from "@/types/views";
import { useEffect, useState } from "react";

export default function usePagination({ allItems, pageSize }: { allItems: any[], pageSize: number }) {
  const [page, setPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [pageItems, setPageItems] = useState(allItems.slice(page, pageSize));

  const getNextPage = () => {
    return hasNextPage() ? page + 1 : page;
  }

  const hasNextPage = () => {
    return (allItems.length / pageSize) - page > 1
  }

  const [nextPage, setNextPage] = useState(getNextPage());

  useEffect(() => {
    setNextPage(getNextPage());
    setPreviousPage(page > 0 ? page - 1 : 0);
    const startIndex = pageSize * page;
    setPageItems(allItems.slice(startIndex, startIndex + pageSize));
  }, [allItems, page, pageSize])


  const goToNextPage = () => {
    setPage(nextPage);
  }

  const goToPreviousPage = () => {
    setPage(previousPage);
  }

  return {
    page,
    pageItems,
    previousPage,
    nextPage,
    goToNextPage,
    goToPreviousPage
  } as IPaginatedTableProps
}