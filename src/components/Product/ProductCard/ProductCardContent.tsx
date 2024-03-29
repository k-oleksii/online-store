import { NavLink } from 'react-router-dom';
import {FC, RefObject, SyntheticEvent, useRef, useState} from 'react';
import {
  Box,
  Breadcrumbs,
  Checkbox,
  Typography,
  Tab,
  Button,
  ListItem,
  ListItemText,
} from '@mui/material';
import Link from '@mui/material/Link';
import { TabContext } from '@mui/lab';

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
  StyledSale,
  StyledNoSale,
  StyledProductCardSection,
} from '@/theme/styles/components/StyledProductCard';
import { StyledRating } from '@/theme/styles/ui/StyledRating';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumBreakpoints, EnumIcons, ICardProps } from '@/types';
import {
  StyledList,
  StyledTabPanel,
  StyledTabsList,
} from '@/theme/styles/ui/StyledTabs';
import { StyledAllLink } from '@/theme/styles/ui/StyledAllLink';
import { ReviewsSection } from '../ReviewsSection';
import { ProductSectionByCategory } from '../ProductSectionWithCategory';
import { ImageSlider } from './ImageSlider';

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
    count,
  } = props;

  const [value, setValue] = useState('1');
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const reviewSection = useRef(null);
  const scrollToSection = (elementRef: RefObject<any>) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <StyledProductCardSection>
      <StyledContainer>
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
            {sale?.newPrise ? (
              <StyledSale>
                <Typography component="span">Sale</Typography>
              </StyledSale>
            ) : (
              <StyledNoSale />
            )}
            <StyledCardImg>
              <ImageSlider images={images} />
            </StyledCardImg>
          </StyledCardRight>
          <StyledCardInfo>
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
              <Typography variant="body2" component="span">
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
              ) : (
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
                  color: '#8083FF',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                variant="body1"
                component="span"
                onClick={() => scrollToSection(reviewSection)}
              >
                {/* {reviews.length} reviews */}
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
                    scrollButtons="auto"
                    sx={{
                      [`@media (min-width: ${EnumBreakpoints.mobile})`]: {
                        width: '200px',
                      },
                      [`@media (min-width: ${EnumBreakpoints.desktopSmall})`]: {
                        width: '576px',
                      },
                    }}
                  >
                    <Tab label="About the product" value="1" />
                    <Tab label="Characteristics" value="2" />
                    <Tab label="Delivery" value="3" />
                  </StyledTabsList>
                </Box>
                <StyledTabPanel value="1" sx={{ padding: '10px' }}>
                  {discription}
                </StyledTabPanel>
                <StyledTabPanel
                  value="2"
                  sx={{ padding: '10px', whiteSpace: 'pre' }}
                >
                  {characteristic}
                </StyledTabPanel>
                <StyledTabPanel value="3" sx={{ padding: '0px 8px 8px 10px' }}>
                  <StyledList
                    sx={{
                      [`@media (min-width: ${EnumBreakpoints.mobile})`]: {
                        display: 'grid',
                        gridTemplateColumns: 'auto',
                      },
                      [`@media (min-width: ${EnumBreakpoints.tabletPortrait})`]:
                        {
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          columnGap: '30px',
                        },
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
                  </StyledList>
                  <Typography component="p" sx={{ fontSize: '10px' }}>
                    *Delivery terms depending on the destination and the
                    selected shipping method
                  </Typography>
                </StyledTabPanel>
              </TabContext>
            </Box>
          </StyledCardInfo>
        </StyledProductCard>

        <div ref={reviewSection}></div>
        <ReviewsSection url={images[0]?.url} name={name} id={id} />
        <ProductSectionByCategory category={categories[0].name} />
        <StyledAllLink style={{ marginTop: '56px' }}>
          <NavLink to={`/online-store/${categories[0].name}s`}>
            View All
            {getIcon(EnumIcons.arrowLong)}
          </NavLink>
        </StyledAllLink>
      </StyledContainer>
    </StyledProductCardSection>
  );
};
