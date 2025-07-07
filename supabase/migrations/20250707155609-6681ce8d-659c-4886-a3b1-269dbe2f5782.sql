-- Create registrations table for event sign-ups
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public event sign-up)
CREATE POLICY "Allow public registration submissions" 
ON public.registrations 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow authenticated users to view registrations (for admin access)
CREATE POLICY "Allow authenticated users to view registrations" 
ON public.registrations 
FOR SELECT 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add unique constraint on email to prevent duplicates
ALTER TABLE public.registrations ADD CONSTRAINT registrations_email_unique UNIQUE (email);