var tmplateString = [
      "<% _.each(githubData, function(element, index, list) { %>",

          "<h2><%= element.login %></h2>",
          "<a href=\"<%= element.repos_url %>\"><%= element.repos_url %></a>",
          "<img style=\"width:200px;\" src=\"<%= element.avatar_url %>\">",

      "<% }) %>"

].join("");
