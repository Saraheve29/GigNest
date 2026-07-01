import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useListings(category = 'all') {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();

    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchListings, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [category]);

  const fetchListings = async () => {
    setLoading(true);
    let query = supabase
      .from('listings')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (category !== 'all') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    if (!error && data) setListings(data);
    setLoading(false);
  };

  return { listings, loading, refresh: fetchListings };
}

export function useProfile(userId) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!userId) return;
    supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
      .then(({ data }) => setProfile(data));
  }, [userId]);

  return { profile, setProfile };
}
