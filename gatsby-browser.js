// https://www.joshwcomeau.com/gatsby/the-worlds-sneakiest-route-change/

export const shouldUpdateScroll = ({ routerProps }) => {
  return !routerProps.location.state?.disableScrollUpdate
}
