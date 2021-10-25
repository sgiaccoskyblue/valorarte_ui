import { FC } from 'react';

import { Profile } from 'utils/types';
import { ReactComponent as PlaceholderIcon } from 'assets/icons/placeholder.svg';

interface ProfilePreviewProps {
    profile: Profile;
}

const ProfilePreview: FC<ProfilePreviewProps> = ({ profile }) => {
    return (
        <div>
            <div>
                <PlaceholderIcon />
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.type}</p>
                </div>
            </div>
            <img src={profile.mainPhoto} alt={profile.name} />
            <p>{profile.description}</p>d
        </div>
    );
};

export default ProfilePreview;
