import FilterButton from "./FilterButton";

export default function FilterList() {

    return (
        <ul id="filter">
            <FilterButton label="All" />
            <FilterButton label="Active" />
            <FilterButton label="Done" />
        </ul>
    )
}