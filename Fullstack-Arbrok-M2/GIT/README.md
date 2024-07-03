# Git - Github

# Tutorial de GitHub

GitHub es una plataforma de desarrollo colaborativo que utiliza el sistema de control de versiones Git. Permite a los desarrolladores trabajar juntos en proyectos, realizar un seguimiento de los cambios realizados en el código y colaborar de manera eficiente.

## Pasos para usar GitHub:

1. Crear una cuenta en GitHub.
2. Crear un nuevo repositorio para tu proyecto.
3. Clonar el repositorio en tu máquina local.
4. Agregar archivos al repositorio o realizar cambios en los existentes.
5. Confirmar los cambios y enviarlos al repositorio remoto.
6. Colaborar con otros desarrolladores a través de "pull requests" para revisar y fusionar cambios.
7. Realizar un seguimiento de los problemas y tareas utilizando las funcionalidades de gestión de proyectos en GitHub.
8. Mantener el repositorio actualizado mediante la sincronización con la versión remota.

Recuerda que GitHub ofrece muchas otras funcionalidades avanzadas, como ramas (branches), etiquetas (tags), integración con herramientas de desarrollo y más. Explora la documentación y tutoriales adicionales para aprovechar al máximo esta poderosa plataforma.

¡Disfruta aprendiendo y colaborando en GitHub!

A continuación, se presentan algunos de los comandos principales de GitHub:

- `git init`: Inicializa un nuevo repositorio local.
- `git clone [URL]`: Clona un repositorio remoto en tu máquina local.
- `git add [archivo]`: Agrega un archivo al área de preparación para ser confirmado.
- `git commit -m "[mensaje]"`: Confirma los cambios realizados en el repositorio local con un mensaje descriptivo.
- `git push`: Envía los cambios confirmados al repositorio remoto.
- `git pull`: Obtiene los cambios más recientes del repositorio remoto y los fusiona con tu versión local.
- `git branch`: Muestra las ramas existentes en el repositorio.
- `git checkout [rama]`: Cambia a la rama especificada.
- `git merge [rama]`: Fusiona los cambios de la rama especificada con la rama actual.
- `git tag [nombre]`: Crea una etiqueta con el nombre especificado en el commit actual.

Estos son solo algunos de los comandos más utilizados en GitHub. A medida que te familiarices más con la plataforma, podrás explorar y utilizar otros comandos avanzados según tus necesidades.

## Diferencia entre Git y GitHub

Git y GitHub son dos conceptos relacionados pero distintos en el mundo del desarrollo de software:

- **Git** es un sistema de control de versiones distribuido. Permite a los desarrolladores realizar un seguimiento de los cambios en su código, crear ramas para trabajar en paralelo y fusionar los cambios de diferentes ramas. Git se utiliza principalmente de forma local en la máquina de un desarrollador.
- **GitHub** es una plataforma en línea que utiliza Git como su sistema de control de versiones. Proporciona un entorno colaborativo en el que los desarrolladores pueden alojar sus repositorios Git de forma remota, colaborar en proyectos con otros desarrolladores, realizar seguimiento de problemas y tareas, y más. GitHub permite a los desarrolladores trabajar juntos de manera eficiente y centralizada en un proyecto.

En resumen, Git es el sistema de control de versiones que se utiliza localmente en la máquina de un desarrollador, mientras que GitHub es una plataforma en línea que utiliza Git para alojar y colaborar en repositorios de forma remota.

## Historia de Git

Git fue creado por Linus Torvalds en 2005 como una herramienta de control de versiones distribuido. Torvalds desarrolló Git para facilitar el manejo de grandes proyectos de código fuente, como el kernel de Linux. Antes de Git, se utilizaban otros sistemas de control de versiones centralizados, pero presentaban limitaciones en términos de rendimiento y escalabilidad.

Git se diseñó con la idea de ser rápido, eficiente y flexible. Utiliza un modelo de datos basado en snapshots en lugar de un modelo basado en diferencias, lo que permite un manejo eficiente de grandes volúmenes de código y una rápida recuperación de versiones anteriores.

Una de las características más destacadas de Git es su capacidad para trabajar de manera distribuida. Esto significa que cada desarrollador tiene una copia completa del repositorio en su máquina local, lo que permite un trabajo independiente y la posibilidad de realizar cambios sin conexión a internet. Además, Git facilita la colaboración entre desarrolladores, ya que permite fusionar los cambios realizados en diferentes ramas de manera sencilla y controlada.

A lo largo de los años, Git se ha convertido en uno de los sistemas de control de versiones más populares y ampliamente utilizados en la industria del desarrollo de software. Su flexibilidad y robustez han hecho que sea la elección preferida para proyectos de todos los tamaños, desde pequeñas aplicaciones individuales hasta grandes proyectos de código abierto.

¡La historia de Git es un testimonio de la importancia del control de versiones en el desarrollo de software y su impacto en la forma en que los equipos colaboran y gestionan el código fuente!

El ciclo de vida de los archivos en Git consta de tres etapas principales: el directorio de trabajo, el área de preparación (o "staging area") y el repositorio.

1. **Directorio de trabajo**: Es donde se encuentran los archivos y carpetas de tu proyecto. Aquí es donde realizas modificaciones en los archivos.
2. **Área de preparación**: También conocida como "staging area" o "index", es una zona intermedia entre el directorio de trabajo y el repositorio. Aquí se agregan los archivos modificados que están listos para ser confirmados. Puedes pensar en ella como una especie de "pila de cambios" que estás preparando para guardar en el repositorio.
3. **Repositorio**: Es donde se almacenan todos los cambios confirmados (commits) y su historial. Aquí es donde los cambios en los archivos se guardan de manera permanente y se pueden acceder en cualquier momento.

El flujo de trabajo típico en Git es el siguiente:

1. Realizas modificaciones en los archivos en el directorio de trabajo.
2. Agregas los archivos modificados al área de preparación utilizando el comando `git add [archivo]`. Puedes agregar archivos individuales o utilizar `git add .` para agregar todos los archivos modificados.
3. Verificas los cambios agregados al área de preparación utilizando el comando `git status`. Aquí puedes ver los archivos que están listos para ser confirmados.
4. Confirmas los cambios agregados al repositorio utilizando el comando `git commit -m "[mensaje]"`. El mensaje es una descripción breve y descriptiva de los cambios realizados.
5. Los cambios confirmados se almacenan en el repositorio y se les asigna un identificador único llamado "hash commit". Estos cambios son ahora parte del historial del repositorio y se pueden acceder en cualquier momento.

Es importante tener en cuenta que el ciclo de vida de los archivos en Git es flexible y te permite realizar cambios, agregarlos al área de preparación y confirmarlos de manera iterativa y selectiva. Esto te brinda un mayor control sobre tus modificaciones y la capacidad de trabajar en diferentes cambios de manera independiente antes de confirmarlos en el repositorio.

Recuerda que Git también ofrece herramientas adicionales, como ramas (branches) y etiquetas (tags), que te permiten trabajar en diferentes líneas de desarrollo y marcar puntos específicos en el historial de tu proyecto.

El flujo de trabajo en Git sigue generalmente estos pasos:

1. **Clonar el repositorio**: Para comenzar, clona un repositorio existente en tu máquina local utilizando el comando `git clone [URL del repositorio]`. Esto crea una copia local del repositorio con todo su historial y archivos.
2. **Trabajar en una rama**: Antes de realizar cualquier cambio, crea una nueva rama utilizando el comando `git checkout -b [nombre de la rama]`. Trabajar en una rama separada te permite realizar cambios sin afectar la rama principal (generalmente llamada "master" o "main").
3. **Realizar cambios**: Realiza los cambios necesarios en los archivos de tu proyecto utilizando tu editor de código favorito. Puedes agregar nuevos archivos, modificar los existentes o eliminarlos según sea necesario.
4. **Agregar cambios al área de preparación**: Una vez que hayas realizado tus cambios, utiliza el comando `git add [archivo]` para agregar los cambios al área de preparación. También puedes utilizar `git add .` para agregar todos los cambios en el directorio de trabajo.
5. **Confirmar los cambios**: Después de agregar los cambios al área de preparación, confírmalos utilizando el comando `git commit -m "[mensaje descriptivo]"`. El mensaje descriptivo debe explicar de manera clara y concisa los cambios realizados.
6. **Empujar los cambios**: Si estás trabajando en una rama local y deseas compartir tus cambios con otros colaboradores, utiliza el comando `git push origin [nombre de la rama]` para enviar tus cambios al repositorio remoto en GitHub.
7. **Crear una solicitud de extracción (pull request)**: Si estás trabajando en un repositorio colaborativo, puedes crear una solicitud de extracción para solicitar que tus cambios se fusionen con la rama principal. Esto permite a otros revisar tus cambios y proporcionar comentarios antes de la fusión final.
8. **Fusionar los cambios**: Una vez que tus cambios han sido revisados y aprobados, puedes fusionarlos en la rama principal utilizando la solicitud de extracción (pull request) o el comando `git merge`. Esto integra tus cambios en la rama principal y los hace accesibles para todos los colaboradores.

Este es solo un flujo de trabajo básico en Git. A medida que te familiarices más con la plataforma, podrás explorar y utilizar características adicionales, como la creación de ramas de características, la resolución de conflictos y la gestión de versiones etiquetadas.

Recuerda que Git es una herramienta poderosa que te brinda control sobre el historial de cambios de tu proyecto y te permite colaborar de manera eficiente con otros desarrolladores. ¡Diviértete explorando y aprendiendo más sobre Git y GitHub!

# Manipulacion de branches

Git proporciona una funcionalidad llamada "branches" que te permite trabajar en diferentes líneas de desarrollo de manera independiente. Un branch es básicamente una versión separada de tu proyecto en la que puedes realizar cambios sin afectar la rama principal.

Puedes crear un nuevo branch utilizando el comando `git branch [nombre de la rama]`. Una vez que hayas creado el branch, puedes cambiarte a él utilizando el comando `git checkout [nombre de la rama]`. A partir de ese momento, cualquier cambio que realices se aplicará solo a esa rama.

Trabajar en branches te permite experimentar, desarrollar nuevas características o solucionar problemas sin afectar el código base. Una vez que hayas completado tu trabajo en el branch, puedes fusionar los cambios en la rama principal utilizando el comando `git merge [nombre del branch]`.

Es importante tener en cuenta que, en ocasiones, puede haber conflictos al fusionar branches si se han realizado cambios en las mismas líneas de código. En esos casos, Git te pedirá que resuelvas los conflictos manualmente.

La manipulación de branches en Git te brinda flexibilidad y control sobre el flujo de trabajo de tu proyecto. Puedes crear tantos branches como necesites y fusionarlos cuando estés listo. Esto te permite trabajar de manera colaborativa y mantener un historial limpio y organizado de tus modificaciones.

Recuerda que Git y GitHub ofrecen herramientas adicionales para la gestión de branches, como la visualización gráfica de ramas y la colaboración en branches remotos. Explora la documentación y tutoriales adicionales para aprovechar al máximo esta funcionalidad de Git.

Crear, eliminar y modificar ramas es rápido y fácil; aquí tienes un resumen de los comandos:

**`git branch`** - muestra todas las ramas.
**`git branch <rama>`** - crea una nueva rama llamada `<rama>`, haciendo referencia al mismo punto en la historia que la rama actual.
**`git branch <rama> <punto-de-inicio>`** - crea una nueva rama llamada `<rama>`, haciendo referencia a `<punto-de-inicio>`, que puede especificarse de cualquier forma que desees, incluyendo el nombre de una rama o una etiqueta.
**`git branch -d <rama>`** - elimina la rama `<rama>`; si la rama no está completamente fusionada en su rama ascendente o está contenida en la rama actual, este comando fallará con una advertencia.
**`git branch -D <rama>`** - elimina la rama `<rama>` independientemente de su estado de fusión.
**`git switch <rama>`** - hace que la rama actual sea `<rama>`, actualizando el directorio de trabajo para reflejar la versión a la que hace referencia `<rama>`.
**`git switch -c <nueva> <punto-de-inicio>`** - crea una nueva rama `<nueva>` haciendo referencia a `<punto-de-inicio>`, y la cambia.

El símbolo especial "HEAD" siempre se puede usar para referirse a la rama actual. De hecho, Git utiliza un archivo llamado "HEAD" en el directorio ".git" para recordar qué rama es la actual:

```
$ cat .git/HEAD
ref: refs/heads/master
```

### **Examinar una versión antigua sin crear una nueva rama**

El comando `git switch` normalmente espera una rama principal, pero también aceptará un commit arbitrario cuando se invoque con --detach; por ejemplo, puedes verificar el commit al que hace referencia una etiqueta:

```bash
$ git switch --detach v2.6.17
Nota: cambiando a 'v2.6.17'.

Estás en un estado de 'HEAD desacoplado'. Puedes explorar, realizar cambios experimentales y confirmarlos, y puedes descartar cualquier commit que hagas en este estado sin afectar ninguna rama realizando otro cambio.
Si deseas crear una nueva rama para retener los commits que crees, puedes hacerlo (ahora o más tarde) utilizando -c con el comando switch nuevamente. Ejemplo:

	git switch -c nombre_nueva_rama

El HEAD ahora se encuentra en 427abfa Linux v2.6.17`
```

El HEAD se refiere entonces al SHA-1 del commit en lugar de a una rama, y git branch muestra que ya no estás en una rama:

```bash
$ cat .git/HEAD
427abfa28afedffadfca9dd8b067eb6d36bac53f
$ git branch

- (desacoplado de v2.6.17)
master`
```

En este caso decimos que el HEAD está "desacoplado".

Esta es una forma sencilla de verificar una versión específica sin tener que inventar un nombre para la nueva rama. Aún puedes crear una nueva rama (o etiqueta) para esta versión más adelante si decides hacerlo.

### **Examinar ramas desde un repositorio remoto**

La rama "master" que se creó al momento de clonar es una copia del HEAD en el repositorio desde el que clonaste. Ese repositorio también puede tener otras ramas, y tu repositorio local mantiene ramas que siguen cada una de esas ramas remotas, llamadas ramas de seguimiento remoto, que puedes ver utilizando la opción `-r` del comando [git-branch[1]](https://git-scm.com/docs/git-branch):

```bash
$ git branch -r   
    origin/HEAD   
    origin/html   
    origin/maint   
    origin/man   
    origin/master   
    origin/next   
    origin/seen   
    origin/todo
```

En este ejemplo, "origin" se llama un repositorio remoto, o "remoto" en resumen. Las ramas de este repositorio se llaman "ramas remotas" desde nuestro punto de vista. Las ramas de seguimiento remoto mencionadas anteriormente se crearon en base a las ramas remotas al momento de clonar y se actualizarán mediante `git fetch` (por lo tanto, `git pull`) y `git push`. Consulta [Actualizar un repositorio con git fetch](https://git-scm.com/docs/user-manual#Updating-a-repository-With-git-fetch) para obtener más detalles.

Es posible que desees construir sobre una de estas ramas de seguimiento remoto en una rama propia, al igual que harías con una etiqueta:

`$ git switch -c mi-copia-de-todo origin/todo`

También puedes verificar `origin/todo` directamente para examinarlo o escribir un parche único. Consulta [cabeza desacoplada](https://git-scm.com/docs/user-manual#detached-head).

Ten en cuenta que el nombre "origin" es simplemente el nombre que Git utiliza de forma predeterminada para referirse al repositorio desde el que clonaste.