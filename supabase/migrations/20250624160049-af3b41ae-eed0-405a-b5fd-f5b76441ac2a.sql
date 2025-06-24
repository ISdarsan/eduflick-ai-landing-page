
-- Create the early_signups table to store user signup information
CREATE TABLE public.early_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  tier TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (since this is user data)
ALTER TABLE public.early_signups ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert signups (for public signup form)
CREATE POLICY "Allow public signups" 
  ON public.early_signups 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create a policy to allow reading signups (you might want to restrict this later)
CREATE POLICY "Allow reading signups" 
  ON public.early_signups 
  FOR SELECT 
  TO authenticated
  USING (true);
