import PropTypes from 'prop-types';
import { Image, ImageName, Status } from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <Status isActive={isOnline}>{isOnline}</Status>
            <ImageName>{name}</ImageName>
            <Image src={avatar} alt={name} width="48" />
            
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
