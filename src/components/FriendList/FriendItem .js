import PropTypes from 'prop-types';
import { Image, ImageName, Status } from './FriendList.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <Status isActive={isOnline === true}>{isOnline}</Status>
            <Image src= {avatar} alt={name} width="48" />
            <ImageName>{name}</ImageName>
        </>
    )
};

FriendItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.oneOf([true, false]).isRequired
    }).isRequired,
};
