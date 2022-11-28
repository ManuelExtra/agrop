export const pagination = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={20}
        layout="table"
        onPageChange={onPageChange}
        showIcons={true}
        totalPages={1000}
      />
    </div>
  );
};
