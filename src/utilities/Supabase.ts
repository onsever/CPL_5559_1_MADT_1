import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const SUPABASE_APIURL = "https://mpajmzelwqybbwnkstyx.supabase.co";
const SUPABASE_APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYWptemVsd3F5YmJ3bmtzdHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNzcxMjUsImV4cCI6MTk5MjY1MzEyNX0.5rJjqoiOP8WijMLkrs_FHQhP0-e7XATQqbwyMiWoKrI";
export const SUPBASE_STORAGE_URL = "https://mpajmzelwqybbwnkstyx.supabase.co/storage/v1/object/public/cpl5559-project/public";

export const supabase = createClient(SUPABASE_APIURL, SUPABASE_APIKEY,
   {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);