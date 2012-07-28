from coffin.shortcuts import render_to_response
from django.template import RequestContext

def test(request):
    return render_to_response('ears/test.html', {}, RequestContext(request))

