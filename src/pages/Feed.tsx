import { PublicationsSection } from "@/components/feed/PublicationsSection";
import { TypographyH1 } from "@/components/ui/typography/H1";
import { BASE_URL_API } from "@/config";
import { useFetch } from "@/hooks/UseFetch";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import useAuthStore from "@/stores/AuthStore";
import { Pet } from "../types/types.d";
import { LoaderPets } from "@/components/LoaderPets";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



interface Response {
  data: Pet[];
  message: string;
}

function Feed() {
  const { logout } = useAuthStore();
  const user = useAuthStore((state) => state.auth.user);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch<Response>(
    BASE_URL_API + "/pets/all"
  );

  // !error
  if (error && !loading) {
    return (
      <DashboardLayout>
        <header className="my-4">
          <TypographyH1>Welcome {user?.email}</TypographyH1>
          <h3>An Error </h3>
        </header>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main className="py-10 ">
        {loading ? (
          <LoaderPets />
        ) : (
          <div className="flex flex-col p-3 md:flex-row items-start gap-5">
            <aside className="flex-grow border flex-shrink">
              Información del usuario en sesión
              <Button variant="outline"
                onClick={() => {
                  logout()
                  localStorage.removeItem("access_token")
                  navigate('/login')
                }}
              >Log out</Button>
            </aside>
            <section className="flex-grow flex-shrink-0 w-full max-w-[600px]">
              <PublicationsSection pets={data!.data} />
            </section>
            <aside className="hidden lg:flex flex-grow border flex-shrink">
              información relevante de la plataforma
            </aside>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}

export { Feed };
