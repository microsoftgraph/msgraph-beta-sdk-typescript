/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the permanentDelete method.
 */
export interface PermanentDeleteRequestBuilder extends BaseRequestBuilder<PermanentDeleteRequestBuilder> {
    /**
     * Permanently delete an outlook task folder and remove its items from the user's mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks on 2021-02-20 and will be removed 2023-02-20
     * @see {@link https://learn.microsoft.com/graph/api/outlooktaskfolder-permanentdelete?view=graph-rest-beta|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Permanently delete an outlook task folder and remove its items from the user's mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks on 2021-02-20 and will be removed 2023-02-20
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const PermanentDeleteRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/outlook/taskGroups/{outlookTaskGroup%2Did}/taskFolders/{outlookTaskFolder%2Did}/permanentDelete";
/**
 * Metadata for all the requests in the request builder.
 */
export const PermanentDeleteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PermanentDeleteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */
