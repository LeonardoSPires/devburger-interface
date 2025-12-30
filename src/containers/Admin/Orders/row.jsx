import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

import { formatDate } from '../../../utils/formatDate';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { ProductImage, SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';

export function Row({ row, orders, setOrders }) {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  async function newStatusOrder(id, status) {
    try {
      setLoading(true);
      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map( (order) => order._id === id ? { ...order, status } : order );

      setOrders(newOrders); 

    } catch (error) {
      console.error(error);
      toast.error('Erro ao atualizar status do pedido!');
    }
    finally {
      setLoading(false);
    }
  }

 const handleDelete = async () => {
  try {
    await api.delete(`/orders/${row.orderId}`);
    toast.success('Pedido deletado com sucesso!');
    
    // Remover o pedido deletado da lista
    const updatedOrders = orders.filter(order => order._id !== row.orderId);
    setOrders(updatedOrders);
    
    setOpenConfirm(false);
  } catch (error) {
    toast.error('Erro ao deletar pedido!');
    console.error(error);
  }
};
  

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{formatDate(row.date)}</TableCell>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((status) => status.id !== 0)} 
            placeholder="Status" 
            defaultValue={ orderStatusOptions.find( status => status.value === row.status || null, )}
            onChange={ status => newStatusOrder( row.orderId, status.value)}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => setOpenConfirm(true)}
            disabled={row.status !== 'Entregue'}
            sx={{
              '&.Mui-disabled': {
                color: '#ccc',
                cursor: 'not-allowed'
              }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Imagem do Produto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map(( product ) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell align="right">{product.category}</TableCell>
                      <TableCell align="right">
                        <ProductImage src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja apagar este pedido?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Cancelar</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.arrayOf.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  setOrders: PropTypes.func.isRequired,
};