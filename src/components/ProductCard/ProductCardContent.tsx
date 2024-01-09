import { getIcon } from '@/helpers/getIcon';
import {
  StyledProductCard,
  StyledCardImg,
  StyledCardInfo,
  StyledProductPrices,
  StyledCardRight,
  StyledProductCode,
  StyledButtonHeartGroup,
  StyledRs,
} from '@/theme/styles/components/StyledProductCard';
import { StyledSale } from '@/theme/styles/components/StyledSale';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import {
  StyledContainer,
  StyledContainerSlider,
} from '@/theme/styles/layout/StyledWrappers';
import { StyledSlider } from '@/theme/styles/ui/StyledSlider';
import { EnumIcons, ICardProps } from '@/types';
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Typography,
  Tab,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FC, memo, useState } from 'react';
import Image from 'react-image-webp';
import Link from '@mui/material/Link';
import { TabContext, TabPanel } from '@mui/lab';
import { StyledTabsList } from '@/theme/styles/ui/StyledTabs';

import { StyledAllLink } from '@/theme/styles/ui/StyledAllLink';
import { NavLink } from 'react-router-dom';
import { SkateboardsSection } from '../Home/SkateboardsSection';
import { BicyclesSection } from '../Home/BicyclesSection';
import { useLoadProducts } from '@/hooks/useLoadProducts';
import { ProductSection } from '../ProductSection';
import { ReviewsSection } from './ReviewsSection';

export const ProductCardContent: FC<ICardProps> = props => {
  const {
    name,
    discription,
    price,
    sale,
    id,
    images,
    rating,
    categories,
    characteristic,
    reviews,
    count
  } = props;
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useLoadProducts(categories[0].name);
  return (
    <StyledContainer>
      <Box mt={19}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/">
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href={categories[0].name}>
            <Typography sx={{ textTransform: 'capitalize' }}>
              {categories[0].name}
            </Typography>
          </Link>
          <Typography color="text.primary" className="line-clamp-1">
            {name}
          </Typography>
        </Breadcrumbs>
        <StyledProductCard>
          <StyledCardRight>
            {sale?.newPrise && (
              <StyledSale>
                <Typography variant="body2" component="span">
                  Sale
                </Typography>
              </StyledSale>
            )}
            <StyledCardImg>
              <Image src={images[0]?.url} webp={images[0]?.url} alt={name} />
            </StyledCardImg>
          </StyledCardRight>
          <StyledCardInfo >
            <Typography
              variant="h1"
              aria-label={name}
              title={name}
              component="h1"
              className="line-clamp-2"
            >
              {name}
            </Typography>
            <StyledProductCode>
              <Typography
                sx={{ color: '#878D99' }}
                variant="body2"
                component="span"
              >
                Product code: {id}
              </Typography>
              {count === 0 ? (
                <Typography
                  sx={{ color: '#D25' }}
                  variant="body2"
                  component="span"
                >
                  Out of stock
                </Typography>
              ): (
                <Typography
                  sx={{ color: '#008E24' }}
                  variant="body2"
                  component="span"
                >
                  In stock
                </Typography>
              )}
            </StyledProductCode>
            <StyledRs>
              <StyledRating
                name={`rating-${rating}`}
                defaultValue={rating ?? 0}
                size="small"
                icon={getIcon(EnumIcons.star)}
                emptyIcon={getIcon(EnumIcons.star)}
                readOnly
              />
              <Typography
                sx={{
                  fontSize: '16px',
                  lineHeight: '140%',
                  color: '#8083FF',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                variant="body2"
                component="span"
              >
                {reviews.length} reviews
              </Typography>
            </StyledRs>
            <StyledProductPrices>
              {!sale?.newPrise ? (
                <Typography variant="newPrice" component="span">
                  ${price}
                </Typography>
              ) : (
                <Typography variant="newPriceRed" component="span">
                  ${sale?.newPrise}
                </Typography>
              )}
              {sale?.newPrise && (
                <Typography variant="oldPrice" component="span">
                  ${price}
                </Typography>
              )}
            </StyledProductPrices>
            <StyledButtonHeartGroup>
              <Button variant="addToCart">Add to cart</Button>
              <Checkbox
                aria-label="Like"
                icon={getIcon(EnumIcons.heart)}
                checkedIcon={getIcon(EnumIcons.heart)}
              />
            </StyledButtonHeartGroup>

            <Box>
              <TabContext value={value}>
                <Box>
                  <StyledTabsList
                    aria-label="Tabs"
                    onChange={handleChange}
                    variant="scrollable"
                  >
                    <Tab label="About the product" value="1" />
                    <Tab label="Characteristics" value="2" />
                    <Tab label="Delivery" value="3" />
                  </StyledTabsList>
                </Box>
                <TabPanel value="1" sx={{ padding: '8px', minHeight: '265px', maxHeight: '265px' }}>
                  {discription}
                </TabPanel>
                <TabPanel
                  value="2"
                  sx={{
                    padding: '8px',
                    whiteSpace: 'pre',
                    maxWidth: '500px',
                    minHeight: '265px',
                    maxHeight: '265px',
                    overflow: 'auto',
                  }}
                >
                  {characteristic}
                </TabPanel>
                <TabPanel value="3" sx={{ padding: '8px', maxHeight: '265px' }}>
                  <List
                    sx={{
                      marginBottom: '38px',
                      padding: '0px',
                      display: 'grid',
                      gridTemplateColumns: 'auto auto',
                      columnGap: '20px',
                      [`& li.MuiListItem-root`]: {
                        display: 'list-item',
                        listStyleType: 'disc',
                        marginLeft: '1em',
                      },
                      [`& li.MuiListItem-root::marker`]: {
                        fontSize: '29px',
                        color: '#D25',
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemText primary="fast delivery — 1-5 days*" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="$20 one price for delivery" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="free shipping from $1000" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="swift processing" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="careful packaging" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="real-time tracking" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="timely shipping" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="international shipping" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="responsive customer support" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary="positive post-purchase experience" />
                    </ListItem>
                  </List>
                  <Typography component="p" sx={{ fontSize: '10px' }}>
                    *Delivery terms depending on the destination and the
                    selected shipping method
                  </Typography>
                </TabPanel>
              </TabContext>
            </Box>
          </StyledCardInfo>
        </StyledProductCard>
      </Box>
      <ReviewsSection reviews={reviews} url={images[0]?.url} name={name} />
      {/* {
        <ProductSection
          data={responseProducts?.data.items}
          title={'Other' + ' ' + categories[0].name + 's'}
        />
      } */}
      {categories[0].name === 'skateboard' && <SkateboardsSection />}
      {categories[0].name === 'bicycle' && <BicyclesSection />}
      <StyledAllLink>
        <NavLink to={`/online-store/${categories[0].name}s`}>
          View All
          {getIcon(EnumIcons.arrowLong)}
        </NavLink>
      </StyledAllLink>
    </StyledContainer>
  );
};
