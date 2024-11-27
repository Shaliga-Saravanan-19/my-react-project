import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function App() {
  // User data state
  const [users, setUsers] = useState([
    { id: 1, name: "John", role: "Admin" },
    { id: 2, name: "Jane", role: "Viewer" },
  ]);

  // Role data state
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: "Read, Write, Delete" },
    { id: 2, name: "Viewer", permissions: "Read" },
  ]);

  // State for Add User dialog
  const [openUserDialog, setOpenUserDialog] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", role: "" });

  // State for Add Role dialog
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: "" });

  // Handle opening and closing Add User dialog
  const handleOpenUserDialog = () => setOpenUserDialog(true);
  const handleCloseUserDialog = () => {
    setOpenUserDialog(false);
    setNewUser({ name: "", role: "" });
  };

  // Handle opening and closing Add Role dialog
  const handleOpenRoleDialog = () => setOpenRoleDialog(true);
  const handleCloseRoleDialog = () => {
    setOpenRoleDialog(false);
    setNewRole({ name: "", permissions: "" });
  };

  // Add new user
  const handleAddUser = () => {
    setUsers([
      ...users,
      { id: users.length + 1, name: newUser.name, role: newUser.role },
    ]);
    handleCloseUserDialog();
  };

  // Add new role
  const handleAddRole = () => {
    setRoles([
      ...roles,
      { id: roles.length + 1, name: newRole.name, permissions: newRole.permissions },
    ]);
    handleCloseRoleDialog();
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* User Management Section */}
      <h1>User Management</h1>
      <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenUserDialog}
        style={{ marginBottom: "40px" }}
      >
        Add User
      </Button>

      {/* Add User Dialog */}
      <Dialog open={openUserDialog} onClose={handleCloseUserDialog}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUserDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Role Management Section */}
      <h1>Role Management</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenRoleDialog}
        style={{ marginTop: "20px" }}
      >
        Add Role
      </Button>

      {/* Add Role Dialog */}
      <Dialog open={openRoleDialog} onClose={handleCloseRoleDialog}>
        <DialogTitle>Add Role</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Role Name"
            type="text"
            fullWidth
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Permissions (e.g., Read, Write)"
            type="text"
            fullWidth
            value={newRole.permissions}
            onChange={(e) =>
              setNewRole({ ...newRole, permissions: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRoleDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddRole} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
