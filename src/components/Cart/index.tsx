import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCart } from '@/lib/otherRedux/selectors';
import { addItemToCart } from '@/lib/otherRedux/slice/user';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { ICartItemProps } from '@/types';
import { CartItem } from './CartItem';
import {
  StyledCartBottom,
  StyledCartDialog,
  StyledCartItemsWrapper,
  StyledCatalogLink,
  StyledNoCartItems,
  StyledNoCartItemsWrapper,
  StyledDialogActions,
  StyledContinueLink,
  StyledPriceTotal,
  StyledSaleTotal,
  StyledTotal,
  StyledTotals,
  StyledCol1,
  StyledCol2,
} from '@/theme/styles/components/StyledCartPopUp';
import { Link } from 'react-router-dom';

export const Cart: FC<ICartItemProps> = ({ id, name, url, price, sale, quantity, }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const infoForCart = { id, name, url: url, price, sale, quantity };

  const handleClickOpen = () => {
    dispatch(addItemToCart(infoForCart));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cart = useSelector(selectCart);
  const priceTotal = cart?.reduce((acc: any, item: any) => {
    return acc + item.quantity * item.price;
  }, 0);
  const saleTotal = cart?.reduce((acc: any, item: any) => {
    return acc + item.quantity * (isNaN(item.sale) ? 0 : item.sale);
  }, 0);
  const saleTotalChecked = isNaN(saleTotal) ? 0 : saleTotal;
  const total = priceTotal + saleTotalChecked;

  return (
    <>
      <Button variant="addToCart" onClick={handleClickOpen}>
        Add to cart
      </Button>
      <StyledCartDialog
        onClose={handleClose}
        open={open}
        // fullScreen={fullScreen}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h1" align="center" mb={3} className="line-clamp-1">
          Cart
        </Typography>
        <DialogContent sx={{ m: 0, p: 0 }}>
          <StyledCartItemsWrapper>
            {!cart?.length ? (
              <StyledNoCartItemsWrapper>
                <StyledNoCartItems>
                  There are no products in your shopping cart yet.
                </StyledNoCartItems>
                <StyledCatalogLink onClick={handleClose}>
                  <Link to="/online-store">View the catalog</Link>
                </StyledCatalogLink>
              </StyledNoCartItemsWrapper>
            ) : (
              <>
                {cart?.map((item: any) => <CartItem key={item.id} {...item} />)}
                <StyledCartBottom>
                  <StyledTotals>
                    <StyledCol1></StyledCol1>
                    <StyledCol2>
                      <StyledPriceTotal>
                        <Typography variant="body1">Price</Typography>
                        <Typography variant="body2" sx={{ color: '#878D99' }}>
                          ${priceTotal}
                        </Typography>
                      </StyledPriceTotal>
                      <StyledSaleTotal>
                        <Typography variant="body1">Sale</Typography>
                        <Typography variant="body2" sx={{ color: '#878D99' }}>
                          ${saleTotalChecked}
                        </Typography>
                      </StyledSaleTotal>
                      <StyledTotal>
                        <Typography variant="body1">Total</Typography>
                        <Typography variant="newPrice">${total}</Typography>
                      </StyledTotal>
                    </StyledCol2>
                  </StyledTotals>
                  <StyledDialogActions>
                    <StyledContinueLink
                      onClick={handleClose}
                      to="/online-store"
                    >
                      Continue shopping
                    </StyledContinueLink>
                    <Button variant="contained" autoFocus onClick={handleClose}>
                      Order
                    </Button>
                  </StyledDialogActions>
                </StyledCartBottom>
              </>
            )}
          </StyledCartItemsWrapper>
        </DialogContent>
      </StyledCartDialog>
    </>
  );
};