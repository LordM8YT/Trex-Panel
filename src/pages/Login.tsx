import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Server, Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-lg p-8 backdrop-blur-xl bg-zinc-900/50 border border-zinc-800">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-zinc-800/50 border border-zinc-700">
                <Server className="w-8 h-8 text-zinc-100" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-zinc-100 mb-2">Welcome Back</h1>
            <p className="text-zinc-400">Sign in to access your dashboard</p>
          </div>
          
          <div className="mb-6 p-4 rounded-md bg-zinc-800/30 border border-zinc-700/50">
            <h3 className="text-sm font-medium text-zinc-300 mb-2">Password Requirements:</h3>
            <ul className="text-xs text-zinc-400 space-y-1">
              <li>• Minimum 6 characters long</li>
              <li>• Can contain letters, numbers, and special characters</li>
            </ul>
          </div>

          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#18181b',
                    brandAccent: '#27272a',
                    inputBackground: '#18181b',
                    inputText: '#fafafa',
                    inputBorder: '#3f3f46',
                    inputBorderFocus: '#52525b',
                    inputBorderHover: '#52525b',
                    messageText: '#fafafa',
                    messageTextDanger: '#ef4444',
                    anchorTextColor: '#d4d4d8',
                    dividerBackground: '#3f3f46',
                  },
                  space: {
                    inputPadding: '12px',
                    buttonPadding: '12px',
                  },
                  borderWidths: {
                    buttonBorderWidth: '1px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '6px',
                    buttonBorderRadius: '6px',
                    inputBorderRadius: '6px',
                  },
                },
              },
              className: {
                container: 'w-full',
                button: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700',
                input: 'bg-zinc-800/50 border-zinc-700 text-zinc-100',
                label: 'text-zinc-400',
                anchor: 'text-zinc-400 hover:text-zinc-300',
                message: 'text-red-400 text-sm mt-1',
              },
            }}
            providers={[]}
            onError={(error) => {
              toast({
                variant: "destructive",
                title: "Error",
                description: error.message,
              });
            }}
          />
          
          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
              <Lock className="w-4 h-4" />
              <span>Secure login powered by Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;