import React, { useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

export default function Filters({ onFilterChange }) {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const handleApplyFilter = () => {
        if (selectedFilter) {
            onFilterChange(selectedFilter);
        }
    };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
                <div className="col">
                    <DropdownButton id="dropdown-basic-button" title={selectedFilter ? `Обраний фільтр: ${selectedFilter}` : 'Вибрати фільтр'}>
                        <Dropdown.Item onClick={() => handleFilterChange("hp")}>
                            Фільтр по потужності
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleFilterChange("speed")}>
                            Фільтр по швидкості
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    <Button
                        className="btn btn-primary"
                        onClick={handleApplyFilter}
                    >
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    );
}
