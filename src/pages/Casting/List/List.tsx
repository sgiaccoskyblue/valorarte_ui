import ProfilePreview from 'components/Profile/ProfilePreview';
import { FC } from 'react';
import { Profile } from 'utils/types';

interface ListProps {
    profiles: Profile[];
}

const List: FC<ListProps> = ({ profiles }) => {
    return (
        <div>
            {profiles.map((profile) => (
                <ProfilePreview key={profile.id} profile={profile} />
            ))}
        </div>
    );
};

export default List;
