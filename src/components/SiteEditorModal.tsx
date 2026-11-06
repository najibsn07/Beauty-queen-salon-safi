import { ChangeEvent, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  FileText,
  Image as ImageIcon,
  Plus,
  RotateCcw,
  Trash2,
  Type,
  Upload,
  X,
} from 'lucide-react';
import { GalleryItem } from '../translations';

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  content: string;
}

export interface CustomSiteData {
  heroHeadline?: string;
  heroSubheadline?: string;
  aboutTitle?: string;
  aboutParagraph1?: string;
  aboutParagraph2?: string;
  addressValue?: string;
  phoneValue?: string;
  hoursOpen?: string;
  hoursClosed?: string;
  galleryItems?: GalleryItem[];
  articles?: ArticleItem[];
}

interface SiteEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  customData: CustomSiteData;
  onUpdateData: (next: CustomSiteData) => void;
  onReset: () => void;
  defaultGallery: GalleryItem[];
  defaultTexts: {
    heroHeadline: string;
    heroSubheadline: string;
    aboutTitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    addressValue: string;
    phoneValue: string;
    hoursOpen: string;
    hoursClosed: string;
  };
}

export function SiteEditorModal({
  isOpen,
  onClose,
  customData,
  onUpdateData,
  onReset,
  defaultGallery,
  defaultTexts,
}: SiteEditorModalProps) {
  const [activeTab, setActiveTab] = useState<'text' | 'images' | 'articles'>('text');

  // New Image Form State
  const [newImgTitle, setNewImgTitle] = useState('');
  const [newImgCategory, setNewImgCategory] = useState<GalleryItem['category']>('haircuts');
  const [newImgUrl, setNewImgUrl] = useState('');

  // New Article Form State
  const [articleTitle, setArticleTitle] = useState('');
  const [articleCover, setArticleCover] = useState('');
  const [articleContent, setArticleContent] = useState('');

  if (!isOpen) return null;

  const currentGallery = customData.galleryItems ?? defaultGallery;
  const currentArticles = customData.articles ?? [];

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    onLoaded: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onLoaded(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddImage = () => {
    if (!newImgUrl.trim()) return;
    const categoryLabels: Record<GalleryItem['category'], string> = {
      all: 'All',
      haircuts: 'Haircuts',
      coloring: 'Hair Coloring',
      blowouts: 'Blowouts',
      occasions: 'Special Occasions',
    };
    const newItem: GalleryItem = {
      id: `custom-img-${Date.now()}`,
      title: newImgTitle.trim() || 'Salon Style',
      category: newImgCategory,
      categoryLabel: categoryLabels[newImgCategory],
      image: newImgUrl.trim(),
    };
    onUpdateData({
      ...customData,
      galleryItems: [newItem, ...currentGallery],
    });
    setNewImgTitle('');
    setNewImgUrl('');
  };

  const handleMoveImage = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= currentGallery.length) return;
    const next = [...currentGallery];
    [next[index], next[target]] = [next[target], next[index]];
    onUpdateData({ ...customData, galleryItems: next });
  };

  const handleDeleteImage = (id: string) => {
    onUpdateData({
      ...customData,
      galleryItems: currentGallery.filter((item) => item.id !== id),
    });
  };

  const handleAddArticle = () => {
    if (!articleTitle.trim() || !articleContent.trim()) return;
    const newArticle: ArticleItem = {
      id: `article-${Date.now()}`,
      title: articleTitle.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      coverImage:
        articleCover.trim() || '/src/assets/images/hero_beauty_queen_1793916711346.jpg',
      content: articleContent.trim(),
    };
    onUpdateData({
      ...customData,
      articles: [newArticle, ...currentArticles],
    });
    setArticleTitle('');
    setArticleCover('');
    setArticleContent('');
  };

  const handleMoveArticle = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= currentArticles.length) return;
    const next = [...currentArticles];
    [next[index], next[target]] = [next[target], next[index]];
    onUpdateData({ ...customData, articles: next });
  };

  const handleDeleteArticle = (id: string) => {
    onUpdateData({
      ...customData,
      articles: currentArticles.filter((a) => a.id !== id),
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site & Article Editor"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
    >
      <div className="w-full max-w-xl bg-[#FFF9F5] text-[#2D1820] h-full flex flex-col border-s border-[#E8D8C8] shadow-2xl">
        {/* Editor Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E8D8C8] flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#702F45]">
              Site &amp; Article Editor
            </h2>
            <p className="text-xs text-[#2D1820]/65">
              Changes save automatically in your browser.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onReset}
              title="Reset to default"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8D8C8] text-xs font-medium text-[#702F45] hover:bg-[#F8E5EA]/50 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close editor"
              className="p-2 rounded-lg text-[#2D1820]/70 hover:bg-[#F8E5EA]/60 hover:text-[#702F45] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editor Tabs */}
        <div className="px-6 py-3 bg-white border-b border-[#E8D8C8] flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'text'
                ? 'bg-[#702F45] text-white'
                : 'text-[#2D1820]/75 hover:bg-[#F8E5EA]/50'
            }`}
          >
            <Type className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Text &amp; Info</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('images')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'images'
                ? 'bg-[#702F45] text-white'
                : 'text-[#2D1820]/75 hover:bg-[#F8E5EA]/50'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Images ({currentGallery.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('articles')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-[#702F45] text-white'
                : 'text-[#2D1820]/75 hover:bg-[#F8E5EA]/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Articles ({currentArticles.length})</span>
          </button>
        </div>

        {/* Editor Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'text' && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={customData.heroHeadline ?? defaultTexts.heroHeadline}
                  onChange={(e) =>
                    onUpdateData({ ...customData, heroHeadline: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  Hero Subheadline
                </label>
                <textarea
                  rows={3}
                  value={customData.heroSubheadline ?? defaultTexts.heroSubheadline}
                  onChange={(e) =>
                    onUpdateData({ ...customData, heroSubheadline: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  About Us Title
                </label>
                <input
                  type="text"
                  value={customData.aboutTitle ?? defaultTexts.aboutTitle}
                  onChange={(e) =>
                    onUpdateData({ ...customData, aboutTitle: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  About Us Paragraph 1
                </label>
                <textarea
                  rows={3}
                  value={customData.aboutParagraph1 ?? defaultTexts.aboutParagraph1}
                  onChange={(e) =>
                    onUpdateData({ ...customData, aboutParagraph1: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  About Us Paragraph 2
                </label>
                <textarea
                  rows={3}
                  value={customData.aboutParagraph2 ?? defaultTexts.aboutParagraph2}
                  onChange={(e) =>
                    onUpdateData({ ...customData, aboutParagraph2: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8D8C8]">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={customData.phoneValue ?? defaultTexts.phoneValue}
                    onChange={(e) =>
                      onUpdateData({ ...customData, phoneValue: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                    Opening Hours
                  </label>
                  <input
                    type="text"
                    value={customData.hoursOpen ?? defaultTexts.hoursOpen}
                    onChange={(e) =>
                      onUpdateData({ ...customData, hoursOpen: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#702F45] mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  value={customData.addressValue ?? defaultTexts.addressValue}
                  onChange={(e) =>
                    onUpdateData({ ...customData, addressValue: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-6">
              {/* Add New Image */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8D8C8] space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#702F45]">
                  Add New Gallery Image
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Image title (e.g. Bridal Updo)"
                    value={newImgTitle}
                    onChange={(e) => setNewImgTitle(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  />
                  <select
                    value={newImgCategory}
                    onChange={(e) =>
                      setNewImgCategory(e.target.value as GalleryItem['category'])
                    }
                    className="px-3 py-2 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  >
                    <option value="haircuts">Haircuts</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="blowouts">Blowouts</option>
                    <option value="occasions">Special Occasions</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Paste image URL or upload file..."
                    value={newImgUrl}
                    onChange={(e) => setNewImgUrl(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  />
                  <label className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#C58A91] text-xs font-medium text-[#702F45] hover:bg-[#F8E5EA]/50 cursor-pointer shrink-0">
                    <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setNewImgUrl)}
                      className="sr-only"
                    />
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleAddImage}
                  disabled={!newImgUrl.trim()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#702F45] text-white text-xs font-medium hover:bg-[#5A2436] disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Add to Gallery</span>
                </button>
              </div>

              {/* Reorder / Delete Existing Images */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#702F45]">
                  Reorder or Remove Images
                </h3>
                {currentGallery.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white border border-[#E8D8C8]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 bg-[#F8E5EA]"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#2D1820] truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#C58A91]">{item.categoryLabel}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleMoveImage(idx, -1)}
                        disabled={idx === 0}
                        aria-label="Move up"
                        className="p-1.5 rounded-lg text-[#702F45] hover:bg-[#F8E5EA]/60 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMoveImage(idx, 1)}
                        disabled={idx === currentGallery.length - 1}
                        aria-label="Move down"
                        className="p-1.5 rounded-lg text-[#702F45] hover:bg-[#F8E5EA]/60 disabled:opacity-30 cursor-pointer"
                      >
                        <ArrowDown className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(item.id)}
                        aria-label="Delete image"
                        className="p-1.5 rounded-lg text-red-700 hover:bg-red-50 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'articles' && (
            <div className="space-y-6">
              {/* Write New Article */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8D8C8] space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#702F45]">
                  Write a New Article
                </h3>
                <input
                  type="text"
                  placeholder="Article title (e.g. How to Care for Colored Hair)"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Cover image URL (optional) or upload..."
                    value={articleCover}
                    onChange={(e) => setArticleCover(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                  />
                  <label className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#C58A91] text-xs font-medium text-[#702F45] hover:bg-[#F8E5EA]/50 cursor-pointer shrink-0">
                    <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setArticleCover)}
                      className="sr-only"
                    />
                  </label>
                </div>

                <textarea
                  rows={5}
                  placeholder="Write your article content here..."
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF9F5] border border-[#E8D8C8] text-sm focus:outline-none focus:border-[#702F45]"
                />

                <button
                  type="button"
                  onClick={handleAddArticle}
                  disabled={!articleTitle.trim() || !articleContent.trim()}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#702F45] text-white text-xs font-medium hover:bg-[#5A2436] disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Publish Article</span>
                </button>
              </div>

              {/* Manage Published Articles */}
              {currentArticles.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#702F45]">
                    Published Articles
                  </h3>
                  {currentArticles.map((article, idx) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white border border-[#E8D8C8]"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#2D1820] truncate">
                          {article.title}
                        </p>
                        <p className="text-xs text-[#2D1820]/60">{article.date}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleMoveArticle(idx, -1)}
                          disabled={idx === 0}
                          aria-label="Move article up"
                          className="p-1.5 rounded-lg text-[#702F45] hover:bg-[#F8E5EA]/60 disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowUp className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMoveArticle(idx, 1)}
                          disabled={idx === currentArticles.length - 1}
                          aria-label="Move article down"
                          className="p-1.5 rounded-lg text-[#702F45] hover:bg-[#F8E5EA]/60 disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteArticle(article.id)}
                          aria-label="Delete article"
                          className="p-1.5 rounded-lg text-red-700 hover:bg-red-50 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
