{
  description = "flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-25.11";
  };

  outputs = { self, nixpkgs, ... }: 
  let 
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_24
        pnpm
      ];

      shellHook = ''
        export PNPM_HOME="$PWD/pnpm_home"
        export PATH="$PNPM_HOME:$PATH"
        pnpm i -g --frozen-lockfile

        cd ../app
        code .

        exec fish -C 'function fish_prompt
          set_color cyan
          echo -n (whoami)
          
          set_color white
          echo -n "@"
          
          set_color blue
          echo -n "learn-the-fretboard "
          
          set_color yellow
          echo -n (prompt_pwd)
          
          set_color white
          echo "> "
        end'
      '';
    };

  };
}
