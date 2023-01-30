import DiscoverBlock from "./DiscoverBlock";
import { CategoryTypeList } from "../../queryHook/categories";
import { NewReleasesTypeList } from "../../queryHook/new-releases";
import { FeaturedPlaylistsTypeList } from "../../queryHook/featured-playlists";

const Index = () => {
  const { data: getCategoryTypeList, isLoading: categoryLoader }: any =
    CategoryTypeList();
  const { data: getNewReleasesTypeList, isLoading: newReleaseLoader }: any =
    NewReleasesTypeList();
  const { data: getFeaturedPlaylistsTypeList, isLoading: playlistLoader }: any =
    FeaturedPlaylistsTypeList();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        isLoading={newReleaseLoader}
        data={getNewReleasesTypeList?.albums?.items}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        isLoading={playlistLoader}
        data={getFeaturedPlaylistsTypeList?.playlists?.items}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        isLoading={categoryLoader}
        data={getCategoryTypeList?.categories?.items}
        imagesKey="icons"
      />
    </div>
  );
};

export default Index;
