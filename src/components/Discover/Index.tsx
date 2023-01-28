import DiscoverBlock from "./DiscoverBlock";
import { CategoryTypeList } from "../../queryHook/categories";
import { NewReleasesTypeList } from "../../queryHook/new-releases";
import { FeaturedPlaylistsTypeList } from "../../queryHook/featured-playlists";

const Index = () => {
  const { data: getCategoryTypeList }: any = CategoryTypeList();
  const { data: getNewReleasesTypeList }: any = NewReleasesTypeList();
  const { data: getFeaturedPlaylistsTypeList }: any =
    FeaturedPlaylistsTypeList();

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={getNewReleasesTypeList?.albums?.items}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={getFeaturedPlaylistsTypeList?.playlists?.items}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={getCategoryTypeList?.categories?.items}
        imagesKey="icons"
      />
    </div>
  );
};

export default Index;
