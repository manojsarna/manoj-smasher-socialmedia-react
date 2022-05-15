import "./filter-sidebar.css";

export function FilterSidebar() {
  return (
    <div className={`sm-main-filter-container sm-sidebar-show" `}>
      <div className="filter-title">
        <span>FILTERS</span>
        <button className="btn-link-txt" title="Clear All Filters">
          CLEAR ALL
        </button>
      </div>
    </div>
  );
}
