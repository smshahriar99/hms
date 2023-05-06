import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const columns = [
  { id: "idNumber", label: "ID NUMBER", minWidth: 170 },
  { id: "name", label: "STUDENT NAME", minWidth: 230 },
  {
    id: "department",
    label: "DEPARTMENT",
    minWidth: 170,
  },
  {
    id: "session",
    label: "SESSION",
    minWidth: 170,
  },
  {
    id: "year",
    label: "YEAR",
    minWidth: 170,
  },
  {
    id: "roomNumber",
    label: "ROOM NUMBER",
    minWidth: 230,
  },
  {
    id: "paidMonth",
    label: "PAID MONTH",
    minWidth: 230,
  },
  {
    id: "dueMonth",
    label: "DUE MONTH",
    minWidth: 230,
  },
  {
    id: "paidAmmount",
    label: "PAID AMMOUNT",
    minWidth: 230,
    format: (value) => value.toFixed(2),
  },
  {
    id: "dueAmmount",
    label: "DUE AMMOUNT",
    minWidth: 230,
    format: (value) => value.toFixed(2),
  },
];

function createData(
  idNumber,
  name,
  department,
  session,
  year,
  roomNumber,
  paidMonth,
  dueMonth,
  paidAmmount,
  dueAmmount
) {
  return {
    idNumber,
    name,
    department,
    session,
    year,
    roomNumber,
    paidMonth,
    dueMonth,
    paidAmmount,
    dueAmmount,
  };
}

const rows = [
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
  createData(
    "16EEE136",
    "SM Shahriar",
    "EEE",
    "2016-17",
    "4th",
    "309",
    "jan,feb,mar",
    "jun,jul,aug",
    5000,
    3000
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };
  const tHeadStyle = {
    backgroundColor: "#178f01",
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    border: "1px solid #a6ff6f",
    lineHeight: "0.5rem",
    padding: "0 10px",
  };
  const tDataStyle = {
    color: "#178f01",
    fontSize: "20px",
    border: "1px solid #a6ff6f",
  };
  const dueStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid #a6ff6f",
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        padding: "8px 70px 70px 70px",
        m: "50px 0",
        backgroundColor: "#dfffdf",
      }}
    >
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        size="small"
        sx={{ mb: 2, ml: 2, width: 300 }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#dfffdf" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                  }}
                  sx={tHeadStyle}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell sx={tHeadStyle}>
                <p>Print</p>
              </TableCell>
              <TableCell sx={tHeadStyle}>
                <p>Edit</p>
              </TableCell>
              <TableCell sx={tHeadStyle}>
                <p>Delete</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      ":hover": {
                        bgcolor: "#178f01 !important",
                        "& .css-rgvsp4-MuiTableCell-root": {
                          color: "#ffffff",
                        },
                        "& .css-t5qd9h-MuiTableCell-root": {
                          color: "#ffffff",
                        },
                      },
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={
                            column.id === "dueAmmount" ? dueStyle : tDataStyle
                          }
                        >
                          {column.format && typeof value === "number"
                            ? `TK ${column.format(value)}`
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell sx={tDataStyle}>
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<PrintIcon />}
                      >
                        Print
                      </Button>
                    </TableCell>
                    <TableCell sx={tDataStyle}>
                      <Button
                        variant="contained"
                        color="warning"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell sx={tDataStyle}>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
