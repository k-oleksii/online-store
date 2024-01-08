import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { getIcon } from '@/helpers/getIcon';
import { EnumIcons } from '@/types';
import { Box, Rating, TextField, Typography } from '@mui/material';
import { StarIcon } from '@/theme/icons/StarIcon';
import {
  StyledDialog,
  StyledProductInfo,
  StyledReviewInfo,
  StyledReviewPopUpWrapper,
  StyledReviewRating,
  StyledTextArea,
  StyledTextField,
  StyledTextFieldg,
} from '@/theme/styles/components/StyledReviewSection';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export const AddReviewPopUp = ({ url, name }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="add review"
        size="large"
        onClick={handleClickOpen}
      >
        {getIcon(EnumIcons.add)}
      </IconButton>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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

        <DialogContent sx={{ m: 0, p: 0 }}>
          <StyledReviewPopUpWrapper>
            <StyledProductInfo>
              <DialogTitle
                sx={{ m: 0, p: 0, fontWeight: '900' }}
                id="customized-dialog-title"
              >
                Leave your feedback
              </DialogTitle>
              <img src={url} className="img" alt={name} width="204" />
              <Typography variant="body2" component="h3">
                {name}
              </Typography>
            </StyledProductInfo>
            <StyledReviewInfo>
              <StyledReviewRating>
                <Typography variant="body2" component="p">
                  Rate the product
                </Typography>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </StyledReviewRating>
              <Typography variant="body2" component="p" sx={{ mt: 3, mb: 1 }}>
                Write a comment
              </Typography>
              <StyledTextArea
                aria-label="empty textarea"
                minRows={8}
                placeholder="Write here (up to 1500 characters)"
              />
            </StyledReviewInfo>
          </StyledReviewPopUpWrapper>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Send
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
};
