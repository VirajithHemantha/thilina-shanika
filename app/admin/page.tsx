'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Link as LinkIcon, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GeneratedLink {
  id: string;
  name: string;
  url: string;
  timestamp: string;
}

const PREFIXES = [
  'Mr.',
  'Mrs.',
  'Miss',
  'Mr. & Mrs.',
  'Master',
  'Rev.',
  'Dr.',
  'Dr. & Mrs.',
  'Prof.',
  'Family',
];

export default function AdminPage() {
  const [prefix, setPrefix] = useState('Mr. & Mrs.');
  const [guestName, setGuestName] = useState('');
  const [links, setLinks] = useState<GeneratedLink[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const savedLinks = localStorage.getItem('wedding_generated_links');
    if (savedLinks) {
      try {
        setLinks(JSON.parse(savedLinks));
      } catch (e) {
        console.error('Failed to parse saved links', e);
      }
    }
  }, []);

  const saveLinks = (newLinks: GeneratedLink[]) => {
    setLinks(newLinks);
    localStorage.setItem('wedding_generated_links', JSON.stringify(newLinks));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const fullName = `${prefix} ${guestName.trim()}`;
    
    // Get the current base URL
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    // Construct the link URL with query param
    const url = `${baseUrl}?to=${encodeURIComponent(fullName)}`;
    
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const newLink: GeneratedLink = {
      id: Date.now().toString(),
      name: fullName,
      url,
      timestamp: formattedDate,
    };

    saveLinks([newLink, ...links]);
    setGuestName('');
  };

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleDelete = (id: string) => {
    saveLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-12 mt-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary">LINK GENERATOR</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Wedding Invitation Admin</p>
        </div>

        {/* Generator Form */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-primary">Select Prefix</label>
                <select
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all"
                >
                  {PREFIXES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-primary">Guest Name</label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-primary text-primary-foreground font-semibold uppercase tracking-widest rounded-xl hover:bg-emerald-dark/90 transition-all shadow-[0_8px_16px_rgba(6,78,59,0.15)] hover:shadow-[0_12px_24px_rgba(6,78,59,0.2)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <LinkIcon size={18} />
              Generate Link
            </button>
          </form>
        </div>

        {/* Recently Generated Links */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-primary border-b border-border pb-4">Recently Generated Links</h2>
          
          <div className="space-y-4">
            <AnimatePresence>
              {links.length === 0 ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground py-12 italic border border-dashed border-border rounded-xl"
                >
                  No links generated yet.
                </motion.p>
              ) : (
                links.map(link => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="space-y-1.5">
                      <p className="font-medium text-foreground text-lg">{link.name}</p>
                      <p className="text-xs text-muted-foreground tracking-widest">{link.timestamp}</p>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                      <button
                        onClick={() => handleCopy(link.id, link.url)}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                          copiedId === link.id
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10'
                        }`}
                      >
                        {copiedId === link.id ? (
                          <>
                            <Check size={16} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(link.id)}
                        className="p-2.5 text-muted-foreground opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all border border-transparent hover:border-destructive/20"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
